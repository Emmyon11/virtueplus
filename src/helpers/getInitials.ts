export const getInitials = (name: String) => {
  const nameArr = name.split(' ');
  let initials = '';
  nameArr.forEach((name) => {
    initials = initials + name[0];
  });
  return initials.toUpperCase();
};
