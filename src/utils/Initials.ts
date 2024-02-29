const Initials = (value: string | undefined) => {
  let name = '';

  if (value && value.length > 0) {
    name = value;
  } else {
    name = 'SmithShop';
  }

  let letters = name
    .split(' ')
    .slice(0, 2)
    .map(l => l[0])
    .join('')
    .toUpperCase();

  return letters;
};

export default Initials;
