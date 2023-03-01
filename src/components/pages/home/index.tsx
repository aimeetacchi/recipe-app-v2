import Card from "../../card"
import HomeStyles from "./styles"

const Home = () => {
    return (
        <HomeStyles>
            <div className="container">
                <h1>Boilerplate React App 2022</h1>
                <p>Boilerplate React Application. Use this for a starter project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque iste quasi facere natus magnam voluptas eos cupiditate exercitationem porro, ad nesciunt aliquam, aspernatur architecto? Illo fugiat nam quidem fugit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque ipsa, itaque, ad quam quis quisquam blanditiis dicta ratione sed ut sunt corporis nulla earum natus maiores laudantium ea nam atque! Temporibus rem non obcaecati possimus inventore libero deserunt adipisci velit maiores quam vitae voluptatibus vel quaerat illo repellendus aperiam, magni officia dolorem expedita suscipit illum porro iusto. Voluptatibus, accusamus temporibus a, cumque aut illum deserunt exercitationem repellat tempore commodi atque fugit vel magnam velit. Exercitationem numquam, corporis accusantium cum excepturi recusandae? Distinctio esse consectetur reprehenderit maiores nulla aut repudiandae, laborum, accusamus repellat alias quisquam a aliquid temporibus ad. Commodi tenetur quos sequi, doloribus</p>
                
                <div className="flex">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </HomeStyles>
    )
}

export default Home