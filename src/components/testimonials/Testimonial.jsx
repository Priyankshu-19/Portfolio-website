import React from 'react';
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className='testimonial'>
            <h5 className='client__name'>Tina Snow</h5>
            <small className='client__review'>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque corporis, vitae facilis placeat necessitatibus dolore, delectus totam doloribus quasi asperiores? Officiis animi voluptatibus minus soluta laboriosam pariatur itaque quae.
            </small>
        </article>
        <article className='testimonial'>   
            <h5 className='client__name'>Shatta Wale</h5>
            <small className='client__review'>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nesciunt aliquam, quae temporibus nulla architecto veritatis corrupti rem cumque quas optio ut aperiam mollitia fugit doloribus non minus consectetur blanditiis?
            </small>
        </article>
        <article className='testimonial'>
            <h5 className='client__name'>Kwame Despite</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea, suscipit id nisi architecto dicta reiciendis non consequuntur qui voluptas doloremque repudiandae cumque at alias veritatis, illo, laudantium ratione harum.
            </small>
        </article>
        <article className='testimonial'>
            <h5 className='client__name'>Nana Ama McBrown</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus accusamus doloribus, dolores, quaerat, vero fuga ratione mollitia accusantium amet molestiae distinctio nostrum. Provident, dolorum odio eaque iusto nihil repellat.
            </small>
        </article>
        
      </div>
    </section>
  )
}

export default Testimonial