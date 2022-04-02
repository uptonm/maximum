import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '@styles/globals.css';
import { client } from '@lib/apollo';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Toaster />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
