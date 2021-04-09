import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carroussel from "../components/Carroussel";
import Item from "../components/Item";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
    const initialState = useInitialState(API)
    return (
        <div className="App">
            <Header />
            <Search />
            {(initialState.mylist) &&
                <Categories title={"Favoritos"}>
                    <Carroussel>
                        <Item/>
                    </Carroussel>
                </Categories>
            }

            {(initialState.trends) &&
            <Categories title={"Sugerencias"}>
                <Carroussel>
                    {initialState.trends.map(item =>
                        <Item key={item.id} {...item} />
                    )}
                </Carroussel>
            </Categories>
            }

            {(initialState.originals) &&
            <Categories title={"Populares"}>
                <Carroussel>
                    {initialState.originals.map(item =>
                        <Item key={item.id} {...item} />
                    )}
                </Carroussel>
            </Categories>
            }
            <Footer />
        </div>
    )
}

export default App