'use strict';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Head from "next/head";
import Header from '@/section/Header';
import Footer from '@/section/Footer';
import styles from '@/styles/Index.module.scss';
import "../styles/scss/nextjs-material-kit.scss";

export default function App({ Component, pageProps }) {
    return (
            <ThemeProvider theme={theme}>
                <Head>
                  <title>Julian Cordoba</title>
                </Head>
                <CssBaseline />
                <div className={styles.Layout}>
                   <Header className={styles.header} />
                   <Component {...pageProps} className={styles.component} />
                   <Footer className={styles.footer} />
                </div>
            </ThemeProvider>
    );
}