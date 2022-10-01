import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from "./BlogCard.styled";

export const BlogCard = ({ article: { name, postedAt, poster, tag, title, description, avatar } }) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{postedAt}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
