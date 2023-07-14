import React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";
import ReturnTopButton from "@/components/layout/ReturnTopButton";
import Head from "next/head";

const Layout = ({ children, title, description }) => {
    return (
        <>
            {(description || title) && <Head>
                <title>{title}</title>
                <meta name="description" content={description} key="desc"/>
            </Head>}
            <div className="wrapper">
                <Header />
                <main className="page">
                    <div className="page__container">
                        <Sidebar />
                        {children}
                    </div>
                </main>
                <ReturnTopButton />
                <Footer />
            </div>
            {/*<AdultPopup />*/}
            {/*<LoginPopup />*/}
            {/*<RegisterPopup />*/}
        </>
    );
};

export default Layout;