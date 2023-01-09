import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { CenteredLayout } from './components/Layouts/CenteredLayout';
import { CenteredLayoutBody } from './components/Layouts/CenteredLayoutBody';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Home } from './pages/Home';
import { Cooperation } from './pages/Cooperation';
import { AllShops } from './pages/AllShops';
import { Subscription } from './pages/Subscription';
import { BannerSubscriptionBasic } from './components/Banners/BannerSubscriptionBasic/BannerSubscriptionBasic';
import { Privacy } from './pages/Privacy';
import { Agreement } from './pages/Agreement';
import { Support } from './pages/Support';
import { ScrollToTop } from './components/Buttons/ScrollToTop';
import { useAppDispatch, useAppSelector } from './store/hooks/hooks'
import { ShopPage } from './pages/ShopPage';
import { About } from './pages/About';
import { Offers } from './pages/Offers';
import { Global } from './styles/Global.styled';
import { CategoryPage } from './pages/Category/CategoryPage';
import { fetchShops } from './store/reducers/asyncActions';
import { Drawer } from './components/Drawer';
import { SearchPage } from './pages/SearchPage';
import { useMediaQuery } from 'react-responsive';
import MobileSearch from './components/MobileSearch';

// не отрабатывает transition у modal
// onBlur не позволяет нажать на кнопку "Показать все" в блоке поиска
// Фильтрация по алфавиту
// Адаптивы
// Статус загрузки для карточек

const StyledMain = styled('main')`
  & {
    flex-grow: 1;
    position: relative;
  }
`

export const StyledHeader = styled('header')`
      & { 
        background-color: #FFFFFF;
        box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.25);
        position: fixed;
        width: 100%;
        z-index: 2;
      }
    `

function App() {
  const menuState = useAppSelector(state => state.menu.value)
  const modalState = useAppSelector(state => state.modal.value)
  const mobileSearchState = useAppSelector(state => state.search.mobileSearchState)
  const dispatch = useAppDispatch()

  const isTablet = useMediaQuery({ query: '(max-width: 999.5px)' })

  useEffect(() => {
    dispatch(fetchShops())
  }, [])

  return (
    <>
      <Global
        overflowY={menuState || modalState || mobileSearchState ? 'hidden' : 'scroll'}
      />
      <Header />
      <StyledMain>
        <CenteredLayout>
          <CenteredLayoutBody>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='shops'
                element={<AllShops />}
              />
              <Route
                path='/shops/:translit'
                element={<CategoryPage />}
              />
              <Route
                path='shops/test'
                element={<ShopPage />}
              />
              <Route
                path='collaboration'
                element={<Cooperation />}
              />
              <Route
                path='subscription'
                element={<Subscription />}
              />
              <Route
                path='privacy'
                element={<Privacy />}
              />
              <Route
                path='agreement'
                element={<Agreement />}
              />
              <Route
                path='support'
                element={<Support />}
              />
              <Route
                path='about'
                element={<About />}
              />
              <Route
                path='offers'
                element={<Offers />}
              />
              <Route
                path='search'
                element={<SearchPage />}
              />
            </Routes>
            <BannerSubscriptionBasic />
            {
              isTablet && <MobileSearch />
            }
          </CenteredLayoutBody>
        </CenteredLayout>
      </StyledMain>
      <Modal />
      <Drawer />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
