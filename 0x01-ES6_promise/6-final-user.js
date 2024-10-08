import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((ele) => ({
        status: ele.status,
        value: ele.status === 'fulfilled' ? ele.value : String(ele.reason),
      }))
    ));
}
