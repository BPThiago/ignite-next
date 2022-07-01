import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import { ShowLessonListProvider } from '../context/showLessonList'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ShowLessonListProvider>
          <Component {...pageProps} />
        </ShowLessonListProvider>
      </ApolloProvider>
    </SessionProvider>
    )
}

export default MyApp
