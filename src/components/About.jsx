import React from "react";

function About({ title }) {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center title">
          ABOUT {title} <span className="span2">MANIA</span>{" "}
        </h2>

        <div className="col-md-6">
          <img
            className="bord"
            src="Rice.jfif"
            alt=""
            width="500"
            height="480"
          />
        </div>

        <div className="col-md-6 para">
          <h3>
            <span className="span2">{title}</span> <b>is awesome!</b>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            saepe a distinctio exercitationem at quae nisi voluptatibus
            aspernatur ex quidem, quisquam id assumenda voluptatem mollitia
            asperiores rerum accusantium molestiae eveniet vel. Rerum
            necessitatibus officiis reiciendis eum assumenda veritatis,
            repellendus ab maiores perferendis. Quaerat delectus atque esse
            facere amet totam expedita.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            saepe a distinctio exercitationem at quae nisi voluptatibus
            aspernatur ex quidem, quisquam id assumenda voluptatem mollitia
            asperiores rerum accusantium molestiae eveniet vel. Rerum
            necessitatibus officiis reiciendis eum assumenda veritatis,
            repellendus ab maiores perferendis. Quaerat delectus atque esse
            facere amet totam expedita.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            saepe a distinctio exercitationem at quae nisi voluptatibus
            aspernatur ex quidem, quisquam id assumenda voluptatem mollitia
            asperiores rerum accusantium molestiae eveniet vel. Rerum
            necessitatibus officiis reiciendis eum assumenda veritatis,
            repellendus ab maiores perferendis. Quaerat delectus atque esse
            facere amet totam expedita.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
