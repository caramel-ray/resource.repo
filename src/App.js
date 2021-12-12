import './App.css'
import NavBar from './components/NavBar'
import LogoFooter from './assets/Logo-Footer.svg'
import HeroImg from './assets/relax.svg'
import EmployeeIcon from './assets/employee.svg'
import PerformanceIcon from './assets/perfomance.svg'
import PaidTimeOffIcon from './assets/paid.svg'
import AssetIcon from './assets/logistics.svg'
import LogisticsIcon from './assets/asset.svg'
import VouchersIcon from './assets/vouchers.svg'
import PayrollIcon from './assets/payroll.svg'
import FBIcon from './assets/fb.svg'
import TWIcon from './assets/tw.svg'
import LinkedInIcon from './assets/in.svg'
import InstagramIcon from './assets/instagram.svg'
import FeaturesFig from './assets/figure.png'
import LogisticsFig from './assets/Direct.png'
import PayrollFig from './assets/payroll-fig.png'
import UnnLogo from './assets/unn.png'
import GenesysLogo from './assets/genesys.png'
import PrivateEstateLogo from './assets/private-estate.png'
import TeneceLogo from './assets/tenece.png'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="intro">
        <div id="hero">
          <h1>Throw paperwork into the trash where it belongs.</h1>
          <p>Eliminate all the hassle involved in managing people operations by automating it.</p>
        </div>
        <figure>
          <img src={HeroImg} alt="" />
        </figure>
      </section>

      <section id="features">
        <h1>Human Resources</h1>
        <p>Onboard new employees, manage the employee lifecycle and measure employee performance.</p>
        <div className="list">
          <div className="feature">
            <img src={EmployeeIcon} alt="" />
            <h2>Employee Management</h2>
            <p>
              From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.
            </p>
          </div>
          <div className="feature">
            <img src={PerformanceIcon} alt="" />
            <h2>Performance Management</h2>
            <p>
              Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. 
            </p>
          </div>
          <div className="feature">
            <img src={PaidTimeOffIcon} alt="" />
            <h2>Paid time off</h2>
            <p>
              Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.
            </p>
          </div>
        </div>
        <figure>
          <img src={FeaturesFig} alt="" />
        </figure>
      </section>

      <section id="logistics">
        <div className="group">
          <div className="desc">
            <h1>Admin & Logistics</h1>
            <p>Manage and track company assets as well as logistics for travelling employees</p>
          </div>
          <div className="list">
            <div className="feature">
              <img src={LogisticsIcon} alt="" />
              <h2>Travel & Logistics</h2>
              <p>
                Make travel requests, get approvals, and have access to travel information.
              </p>
            </div>
            <div className="feature">
              <img src={AssetIcon} alt="" />
              <h2>Asset Management</h2>
              <p>
                Manage the acquisition, assignment, and disposition of assets seamlessly.
              </p>
            </div>
          </div>
        </div>
        <figure>
          <img src={LogisticsFig} alt="" />
        </figure>
      </section>
      
      <section id="finance">
        <div className="group">
          <div className="desc">
            <h1>Finance</h1>
            <p>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
          </div>
          <div className="list">
            <div className="feature">
              <img src={VouchersIcon} alt="" />
              <h2>RE Vouchers</h2>
              <p>
                Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers
              </p>
            </div>
            <div className="feature">
              <img src={PayrollIcon} alt="" />
              <h2>Payroll</h2>
              <p>
                Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.
              </p>
            </div>
          </div>
        </div>
        <figure>
          <img src={PayrollFig} alt="" />
        </figure>

        <div className="clients">
          <div>
            <img src={UnnLogo} alt="" />
          </div>
          <div>
            <img src={GenesysLogo} alt="" />
          </div>
          <div>
            <img src={PrivateEstateLogo} alt="" />
          </div>
          <div>
            <img src={TeneceLogo} alt="" />
          </div>
        </div>
      </section>
      
      <footer>
        <div className="brand">
          <img src={LogoFooter} alt="" />
          <p>Throw paperwork into the trash.</p>
        </div>

        <div className="more">
          <div className="social">
            <a href="#fb">
              <img src={FBIcon} alt="" />
            </a>
            <a href="#tw">
              <img src={TWIcon} alt="" />
            </a>
            <a href="#in">
              <img src={LinkedInIcon} alt="" />
            </a>
            <a href="#instagram">
              <img src={InstagramIcon} alt="" />
            </a>
          </div>
          <p>Copyright © Genesys DevStudio . All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
