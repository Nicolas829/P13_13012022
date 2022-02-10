import './accueil.css'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import shield from '../../assets/icon-security.png'
import Hero from '../../components/hero/hero'
import NavBar from '../../components/navbar/navbar'

export default function Accueil() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <div class="feature-item">
          <img src={chat} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div class="feature-item">
          <img src={money} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div class="feature-item">
          <img src={shield} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </div>
  )
}
