import { headers } from 'next/headers';

function useGetHeaders() {
  const headersList = headers();
  const pathname = headersList.get('X-Pathname');
  return {
    headersList,
    pathname
  };
}

export default useGetHeaders