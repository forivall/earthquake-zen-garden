import React from 'react';
import { Link } from 'react-router-dom';
import type { EarthquakeFeatureFormatted } from '../../helpers/formatting';
import { formatEarthquakeFeature } from '../../helpers/formatting';
import { EarthquakeData, EarthquakeFeature } from '../../types/data.types';
import styles from './Index.module.css';

interface Props {
  data: EarthquakeData;
}

interface EarthquakeFeatureWithFormatted extends EarthquakeFeature {
  formatted: EarthquakeFeatureFormatted;
}

type SortedTableReturn = [
  EarthquakeFeatureWithFormatted[],
  (column: SortColumn) => React.ThHTMLAttributes<unknown>
];

type SortColumn = 'place' | 'mag' | 'time';
type SortItem = { column: SortColumn; direction: 1 | -1 }; // 1 = asc, -1 = desc

const sortReducer = (state: SortItem[], column: SortColumn): SortItem[] => {
  if (state.length === 0) {
    return [{ column, direction: 1 }];
  }

  if (state[0].column === column) {
    const [current, ...rest] = state;
    return [{ column, direction: -current.direction as 1 | -1 }, ...rest];
  }

  const rest = state.filter((it) => it.column !== column);
  return [{ column, direction: 1 }, ...rest];
};

type CompareFn<T> = (a: T, b: T) => number;
const comparator = (state: SortItem[]) => {
  return state.reduceRight<CompareFn<EarthquakeFeature>>(
    (next, { column, direction }) =>
      (a, b) => {
        const aValue = a.properties[column];
        const bValue = b.properties[column];
        if (aValue === bValue) return next(a, b);
        return direction * (aValue < bValue ? -1 : 1);
      },
    () => 0
  );
};

const useSortedTable = (features: EarthquakeFeature[]): SortedTableReturn => {
  const formatted = React.useMemo(
    () =>
      features.map((f) => ({ ...f, formatted: formatEarthquakeFeature(f) })),
    [features]
  );

  const [sortState, setSort] = React.useReducer(sortReducer, []);

  const sorted = React.useMemo(() => {
    if (sortState.length === 0) {
      return formatted;
    }
    return [...formatted].sort(comparator(sortState));
  }, [formatted, sortState]);

  // I *think* this is everything to make it accessible. For a real scenario, I'd use
  // something like https://github.com/ariakit/ariakit
  const thProps = (column: SortColumn): React.ThHTMLAttributes<unknown> => ({
    onClick() {
      setSort(column);
    },
    onKeyDown(event) {
      if (
        !event.defaultPrevented &&
        !event.metaKey &&
        (event.key === 'Enter' || event.key === ' ')
      ) {
        setSort(column);
      }
    },
    tabIndex: 0,
    role: 'button',
    'aria-sort':
      sortState[0]?.column === column
        ? sortState[0].direction === 1
          ? 'ascending'
          : 'descending'
        : undefined,
    className: styles.sortableTh,
  });

  return [sorted, thProps];
};

const EarthquakeTable: React.VFC<Props> = (props) => {
  const { data } = props;

  const [features, thProps] = useSortedTable(data.features);

  return (
    <table className={styles.earthquakeTable}>
      <thead>
        <tr>
          <th {...thProps('place')}>Title</th>
          <th {...thProps('mag')}>Magnitude</th>
          <th {...thProps('time')}>Time</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, i) => {
          const id = feature.id ?? `__index__${i}`;
          return (
            <tr key={id}>
              <td>
                <Link to={`/earthquake/${id}`}>{feature.properties.place}</Link>
              </td>
              <td className={styles.textCenter}>{feature.properties.mag}</td>
              <td
                title={`${feature.formatted.timeIso}\nLocal time: ${feature.formatted.timeLocal}`}
              >
                {feature.formatted.time}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EarthquakeTable;
