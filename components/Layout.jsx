import Head from "next/head";
import { Box } from '@chakra-ui/react';


const Layout = ({children}) => (
    <>
    <Head>
        <title>Real Homes</title>
    </Head>
    <Box maxWidth='1280px' m='auto'>
        <header>
            NAVBAR
        </header>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </Box>
    </>
)

export default Layout;
