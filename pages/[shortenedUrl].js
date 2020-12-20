import { useRouter } from 'next/router';
import { useEffect } from 'react';

import uuid from '@/util/uuid';

const longIdRegex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
const shortIdRegex = /^[a-zA-Z0-9\-]{22}$/;

export default function ShortenedUrl () {
  const router = useRouter();
  const { shortenedUrl } = router.query;
  
  if(typeof window !== 'undefined' && shortenedUrl) {
    if (longIdRegex.test(shortenedUrl)) {
      router.replace(`/list/${shortenedUrl}`);
    }
    else if (shortIdRegex.test(shortenedUrl)) {
      router.replace(`/list/${uuid.longify(shortenedUrl)}`);
    }
    else {
      router.replace('/');
    }
  }

  return <div>Redirecting...</div>;
}