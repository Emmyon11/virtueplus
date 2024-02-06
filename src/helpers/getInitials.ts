export const getInitials = (name: String) => {
  const nameArr = name.split(' ');
  let initials = '';
  if (nameArr.length > 1) {
    initials += nameArr[0].charAt(0).toUpperCase() + '. ';
    initials += nameArr[nameArr.length - 1].charAt(0).toUpperCase();
  } else {
    initials = name.charAt(0).toUpperCase();
  }
  return initials;
};
