import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import edu2 from "../edu2.png";
import edu3 from "../edu.png";
import LoadingComponent from "../components/Loading/index";
import { AiOutlineDown } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillBackward } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";

function HomePage() {
  const [version, SetVersion] = useState("00");
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(`card`);
  const [activeIcon, setActiveIcon] = useState(`icon2`);

  const authService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  });

  useEffect(() => {
    setTimeout(() => {
      authService.get("/version").then((response) => {
        //console.log(`********4343`, response.data.version);
        SetVersion(response.data.version);
        setLoading(false);
      });
    }, 4000);
  }, []);

  const handleToggle = (e) =>
    activeCard === `card`
      ? (setActiveCard(`card active`), setActiveIcon(`icon2 active`))
      : (setActiveCard(`card`), setActiveIcon(`icon2`));

  const handleReload = (e) => {
    window.location.reload();
  };

  const handleReloadBack = (e) => {
    /*    const versionLess = {
      versionLess: version - 1,
    }; */
    authService.get("/version-back").then((response) => {
      //console.log(`********4343`, response.data.version);
      /*   SetVersion(response.data.version); */
      window.location.reload();
      setLoading(false);
    });
  };

  const texto = `Edu Vadillo - Creative Web Developer - `;

  const texto2 = texto.split("").map((char, i) => <span className={`rotate` + i}>{char}</span>);

  // style={{marginRight: spacing + 'em'}}

  if (loading === true) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (loading === false && version === 1) {
    return (
      <>
        <div className='web1'>
          <div className='circle'>
            <div className='logo'></div>
            <div className='text'>
              <p>{texto2} </p>
            </div>
          </div>
          <ul className='navigation'>
            <li>
              <a href='https://www.instagram.com/eduvadi/?hl=es' target='_blank'>
                <FaInstagram className='icon' />
                Instagram
              </a>
            </li>
            <li>
              <a href='https://twitter.com/EduVadi' target='_blank'>
                <GrTwitter className='icon' />
                Twitter
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
                <FaLinkedinIn className='icon' />
                Linkedin
              </a>
            </li>
          </ul>
          <div className='div-icons-next-back'>
            <AiFillBackward className='icon-back' onClick={handleReloadBack} />
            1/3
            <AiFillForward className='icon-next' onClick={handleReload} />
          </div>
        </div>
      </>
    );
  }
  if (loading === false && version === 2) {
    return (
      <>
        <div className='web2'>
          <div className={activeCard}>
            <div className='content'>
              <div className='imgBx'>
                <img src={edu2}></img>
              </div>
              <h2>
                Edu Vadillo <br /> <span>Web Developer</span>{" "}
              </h2>
            </div>
            <ul className='navigation'>
              <li>
                <a href='https://www.instagram.com/eduvadi/?hl=es' target='_blank'>
                  <FaInstagram className='icon' />
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://twitter.com/EduVadi' target='_blank'>
                  <GrTwitter className='icon' />
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
                  <FaLinkedinIn className='icon' />
                  Linkedin
                </a>
              </li>
            </ul>
            <div className='toggle' onClick={handleToggle}>
              <AiOutlineDown className={activeIcon} />
            </div>
          </div>
        </div>
        <div className='div-icons-next-back2'>
          <AiFillBackward className='icon-back' onClick={handleReloadBack} />
          2/3
          <AiFillForward className='icon-next' onClick={handleReload} />
        </div>
      </>
    );
  }

  if (loading === false && version === 3) {
    return (
      <>
        <div className='web3'>
          <div className='card3'>
            <div className='imgBx3'>
              <img src={edu3}></img>
            </div>
            <div className='content3'>
              <div className='details3'>
                <h2>
                  Edu Vadillo <br /> <span>Web Developer</span>
                </h2>
                <ul className='sci'>
                  <li>
                    <a href='https://www.instagram.com/eduvadi/?hl=es' target='_blank'>
                      <FaInstagram className='icons3' />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/EduVadi' target='_blank'>
                      <GrTwitter className='icons3' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
                      <FaLinkedinIn className='icons3' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='div-icons-next-back2'>
          <AiFillBackward className='icon-back' onClick={handleReloadBack} />
          3/3
          <AiFillForward className='icon-next' onClick={handleReload} />
        </div>
      </>
    );
  }
}

export default HomePage;
