
const Header = () => {
  const title = "SKŁAD OPAŁU"
  const content1 = "Posiadamy najlepszy opał w najniższych cenach!"
  const content2 = "Ceny najniższe w internecie!!!"
  return (   
     <section id="about">
        <div className="row">
            <div className="col-12 text-center mb-60">
                <h1>{title}</h1>
                <h3>{content1}</h3>
                <h3>{content2}</h3>
                <h4>Zapraszamy do kontaktu! 
                  <a href="tel:48502564445">+48 502 564 445</a>
                </h4>
            </div>
        </div>
    </section>
  )
};

export default Header;
