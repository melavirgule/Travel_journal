import Card from './component/Card'
import Navbar from './component/Navbar'
import data from './data'

function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        key={item.title}
        // item={item}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <section className='cards--list'>
        {cards}
      </section>
    </>
  )
}

export default App
