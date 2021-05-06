import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carroussel from "../components/Carroussel";
import Item from "../components/Item";
import '../assets/styles/containers/Home.scss'

const Home = ({myList, trends, originals}) => {
    return (
        <>
            <Header/>
            <Search isHome/>
            {
                (myList.length) &&
                <Categories title={"Favoritos"}>
                    <Carroussel>
                        {myList.map(item =>
                            <Item
                                key={item.id}
                                {...item}
                                isList
                            />
                        )}
                    </Carroussel>
                </Categories>
            }
            {
                (trends) &&
                <Categories title={"Sugerencias"}>
                    <Carroussel>
                        {trends.map(item =>
                            <Item key={item.id} {...item} />
                        )}
                    </Carroussel>
                </Categories>
            }
            {
                (originals) &&
                <Categories title={"Populares"}>
                    <Carroussel>
                        {originals.map(item =>
                            <Item key={item.id} {...item} />
                        )}
                    </Carroussel>
                </Categories>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect(mapStateToProps, null)(Home)
