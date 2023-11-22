import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    <div>
        <div className='first d-flex flex-column justify-content-center align-items-center'>
            <h1 className=' para text-white'>Six generations</h1>
            <h3 className=' tera text-white'>Audi makes family history</h3>
            <Button className='h-btn' variant='outline-light'>Read more</Button>
        </div>

        <div>
            <div className=' d-flex  justify-content-center' >
                <h3 className='para mt-5'>Current topics from the world of Audi</h3>
            </div>
            <div className='d-flex justify-content-evenly'>

            <Card style={{ width: '25rem' }}>
      <Card.Img style={{scale:'1.1s'}} variant="top" src="https://www.audi.com/content/dam/gbp2/sport/football/audi-and-fc-bayern/a-way-to-inspire/1920x1080_C0A3692.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
          Working at Audi - 11/06/2023
        </Card.Text>
        <Card.Title>Women in Tech: how Four Audi Employees Are Shaping the Future</Card.Title>
        <Card.Text>
        They are bringing artificial intelligence (AI) into Audi production, making motorsport sustainable, and helping to reinvent the car: Anna Vogt, Daniela Buch, Kirsten Wellkamp, and Lea Schwarz talk about their daily lives as tech experts at Audi.
        </Card.Text>
      </Card.Body>
    </Card>

            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.audi.com/content/dam/gbp2/sustainability/people-and-society/corporate-citizenship/audi-one-young-world-summit-2023/1920x1080_oyw2023_A224634_large.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
          Audi in Football - 10/03/2023
        </Card.Text>
        <Card.Title>A way to inspire — Audi & FC Bayern take Copenhagen</Card.Title>
        <Card.Text>
        The partners are embarking on another journey together. This time, their destination is Copenhagen — a thrilling city bursting with inspirational stories and projects to share with the world. Join our team as they take the Audi RS e-tron GT FC Bayern concept* for a spin and explore Copenhagen while they gear up for the FC Bayern match against FC Copenhagen at Parken Stadium.
        </Card.Text>
      </Card.Body>
    </Card>

            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.audi.com/content/dam/gbp2/careers/Working-at-Audi/culture/women-in-tech/1920x1080_DSC_9374.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
          Corprate Citizenship - 09/28/2023
        </Card.Text>
        <Card.Title>One Young World: Audi’s contribution to the future</Card.Title>
        <Card.Text>
        The One Young World Summit will bring young people together in Belfast from October 2 to 5 to find solutions to the great challenges of our time. Among them are representatives from Audi, Bentley, Elli, and the Audi Environmental Foundation.
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
        </div>

        <div className='d-flex justify-content-center mt-5 ms-5 me-5'>
            <div className=''>
                <h3 className='fs-2 mb-3'>Full electric speed ahead</h3>
                <p className='fs-5'>Audi recently underpinned its clear course toward electromobility with strong figures and important milestones. How the Four Rings are progressing on their path to successful electrification.</p>

                <Button className='h-btn' variant='outline-dark'>Read more</Button>

                <p className='fs-6 mt-3'>Audi Q8 Sportback e-tron:Power consumption (combined*) in kWh/100 km: 24.1–19.5CO₂ emissions (combined*) in g/km: 0
                Information on fuel/power consumption and CO₂ emissions with ranges depending on the selected equipment of the vehicle.
                Only consumption and emission values according to WLTP and not according to NEDC are available for the vehicle.</p>

            </div>
            <div className='ms-4'>
                <img src="https://www.audi.com/content/dam/gbp2/2023/Homepage/teasers/1920x1080_sb_Q8e_r_2022_4392_without_Cast.jpg?imwidth=792&imdensity=1" alt="" />
            </div>
        </div>

        <div className='d-flex justify-content-center mt-5 ms-5 me-5'>

        <div className='me-4'>
                <img src="https://www.audi.com/content/dam/gbp2/careers/Working-at-Audi/Overview/1920x1080_T4_Tiantian_DSC09637.jpg?imwidth=792&imdensity=1" alt="" />
            </div>
            
        <div className='d-flex flex-column justify-content-center'>
                <h3 className='fs-2 mb-3'>Full electric speed ahead</h3>
                <p className='fs-5'>Help us to design the mobility of tomorrow. With cars that use state-of-the-art technology to offer an awesome driving experience and, at the same time, pave the way into a future that is digital, sustainable and electric.</p>

                <Button  className='h-btn w-50 ' variant='outline-dark'>Read more</Button>

            </div>
        </div>

        <div>
            <div className=' d-flex  justify-content-center' >
                <h3 className='para mt-5'>Press releases</h3>
            </div>
            <div className='d-flex justify-content-evenly'>

            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.audi.com/content/dam/gbp2/2023/Homepage/Pressemitteilungen/1920x1080_A235949_large.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
         Audi MediaCenter - 11/07/2023
        </Card.Text>
        <Card.Title>Audi begins production of electric motors for the PPE in Győr</Card.Title>
        <Card.Text>
        To the press release
        </Card.Text>
      </Card.Body>
    </Card>

            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.audi.com/content/dam/gbp2/2023/Homepage/Pressemitteilungen/1920x1080_A235731_large.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
      Audi MediaCenter - 10/30/2023
        </Card.Text>
        <Card.Title>Audi Sport’s ultimate meeting of electrified prototypes: “e-tron on track”</Card.Title>
        <Card.Text>
        To the press release
        </Card.Text>
      </Card.Body>
    </Card>

            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.audi.com/content/dam/gbp2/2023/Homepage/Pressemitteilungen/1920x1080_financial-highlights-EN.jpg?imwidth=477&imdensity=1" />
      <Card.Body>
      <Card.Text>
      Audi MediaCenter - 10/27/2023
        </Card.Text>
        <Card.Title>Audi Group: Solid development in the first nine months</Card.Title>
        <Card.Text>
        To the press release
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
        </div>

        <div className='d-flex justify-content-center mt-5 mb-5'>
        <Button  className='h-btn w-25 ' variant='dark'>To the Audi Media Center</Button>  
        </div>

        <div className='d-flex justify-content-center mt-5 ms-5 me-5 mb-5'>

<div className='me-4'>
        <img src="https://www.audi.com/content/dam/gbp2/2023/Homepage/teasers/1920x1080_q4_2023_5625.jpg?imwidth=792&imdensity=1" alt="" />
    </div>
    
<div className='d-flex flex-column justify-content-center'>
        <h3 className='fs-3 mt-2'>At Audi you’ll find the right vehicle for every requirement</h3>
        <h5 className='fs-5 mt-2'>Sporty, luxurious, or compact – at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.</h5>

        <Button  className='h-btn w-50 mt-4 mb-4' variant='outline-dark'>Discover all models</Button>
        <p className='fs-6'>Audi Q4 e-tron:Power consumption (combined*) in kWh/100 km: 20.1–16.
        <br />6CO₂ emissions (combined*) in g/km: 0 <br />
Information on fuel/power consumption and CO₂ emissions with ranges depending on the selected equipment of the vehicle. <br />
Only consumption and emission values according to WLTP and not according to NEDC are available for the vehicle.</p>

    </div>
</div>

    </div>
  )
}

export default Home