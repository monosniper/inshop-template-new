import Layout from "@/components/layout/Layout";
import React, {useEffect} from "react";
import store from "@/store";
import getShop from "@/lib/getShop";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ req }) {
  const rs = await getShop(req)

  return rs.shop ? { props: {
    ...(await serverSideTranslations(rs.shop.options.language)),
    shop: rs.shop
  } } : rs;
}

export default function Home({ shop }) {
  useEffect(() => {
    store.setShopMedia(shop.Media)
    store.setModules(shop.Modules)
    console.log(shop.Modules)
    store.setOptions(shop.options)
    store.setUuid(shop.uuid)
    store.setCustomPages(shop.Custompages)
    store.setCategories(shop.Categories)
  }, [])

  return (
    <Layout>
      <section className="banners">
        <div className="banners__items">
          <div className="banners__row">
            <a href="" className="banner -ibg">
              <img src="assets/img/banners/get.svg" alt="Image" className="banner__img" />
              <h3 className="banner__title banner__title_big">GET UP TO 50% OFF</h3>
            </a>
            <div className="banner -ibg">
              <button className="banner__btn btn-fav" type="submit"><i
                  className="_icon-fav"></i><i className="_icon-fav_f"></i></button>
              <a href=""><img src="assets/img/banners/02.jpg" alt="Image"
                              className="banner__img" /></a>
            </div>
            <div className="banner -ibg">
              <button className="banner__btn btn-fav" type="submit"><i
                  className="_icon-fav"></i><i className="_icon-fav_f"></i></button>
              <a href=""><img src="assets/img/banners/03.jpg" alt="Image"
                              className="banner__img" /></a>
            </div>
            <a href="" className="banner -ibg">
              <img src="assets/img/banners/summer.svg" alt="Image" className="banner__img" />
            </a>
          </div>
          <div className="banners__row">
            <div className="banner -ibg">
              <button className="banner__btn btn-fav" type="submit"><i
                  className="_icon-fav"></i><i className="_icon-fav_f"></i></button>
              <a href=""><img src="assets/img/banners/04.jpg" alt="Image"
                              className="banner__img" /></a>
            </div>
            <div className="banner -ibg">
              <button className="banner__btn btn-fav" type="submit"><i
                  className="_icon-fav"></i><i className="_icon-fav_f"></i></button>
              <a href="">
                <img src="assets/img/banners/05.jpg" alt="Image" className="banner__img" />
              </a>
            </div>
            <div className="banner -ibg">
              <img src="assets/img/banners/trending.jpg" alt="Image" className="banner__img" />
              <span className="banner__block">
									<h4 className="banner__title"><a href="">Trending & Hot</a></h4>
									<div className="banner__text">A collection of most trending items.</div>
								</span>

            </div>
            <div className="banner -ibg">
              <img src="assets/img/banners/buy.jpg" alt="Image" className="banner__img" />
              <span className="banner__block">
									<h4 className="banner__title"><a href="">Buy it for the first time</a></h4>
									<div className="banner__text">New in store. Try it before anyone else.</div>
								</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

