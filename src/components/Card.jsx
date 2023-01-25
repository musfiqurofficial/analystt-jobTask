import React from "react";
import Card from "react-bootstrap/Card";

const CardComponents = ({ user }) => {
  console.log(user);
  const { name, username, email, phone, website, address, company } = user;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          User Name: {username}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Phone: {phone}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Email: {email}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Website: {website}
        </Card.Subtitle>
        <div>
          <Card.Text className="font-semibold text-lg underline">
            Address:
          </Card.Text>
          <div className="grid grid-cols-2 justify-between">
            <Card.Text>City: {address.city}</Card.Text>
            <Card.Text>Geo: {address.geo.lng}</Card.Text>
            <Card.Text>Street: {address.street}</Card.Text>
            <Card.Text>Zip Code: {address.zipcode}</Card.Text>
          </div>
        </div>
        <div>
          <Card.Text className="font-semibold text-lg underline">
            Company details:
          </Card.Text>
          <div className="">
            <Card.Text>Name: {company.name}</Card.Text>
            <Card.Text>Catch Phrase: {company.catchPhrase}</Card.Text>
            <Card.Text>BS: {company.bs}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponents;
