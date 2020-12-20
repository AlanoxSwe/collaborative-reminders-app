import Router from 'next/router';

const redirect = async (url) => Router.push(url);

export default { redirect };
