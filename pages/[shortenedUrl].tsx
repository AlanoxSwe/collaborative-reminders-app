// Dependencies
import React from 'react';
import { useRouter } from 'next/router';
// Utils
import uuid from '@/util/uuid';

const longIdRegex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
const shortIdRegex = /^[a-zA-Z0-9\-]{22}$/;

const ShortenedUrl = (): JSX.Element => {
  const router = useRouter();
  const { shortenedUrl }: { shortenedUrl?: string } = router.query;
  
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

export default ShortenedUrl;
