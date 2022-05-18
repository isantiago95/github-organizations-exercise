export const sortByName = array =>
  array.sort((a, b) => a.login.localeCompare(b.login, 'en', { sensitivity: 'base' }));

export const parseDate = date =>
  new Date(date).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const parseName = name => {
  const replaced = name.replaceAll('_', ' ');
  return replaced.charAt(0).toUpperCase() + replaced.slice(1);
};

export function isURL(string) {
  if (
    string &&
    typeof string === 'string' &&
    !string.includes('api.github.com') &&
    string.includes('github.com')
  )
    return true;
}

export const isDate = date => new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));

export const parseValue = value => {
  if (!value) return 'N/A';
  if (typeof value === 'boolean') {
    if (value) return <span className='text-success'>Yes</span>;
    else return <span className='text-danger'>No</span>;
  }
  if (typeof value === 'number') return value;
  if (isDate(value)) return parseDate(value);
  return value;
};
