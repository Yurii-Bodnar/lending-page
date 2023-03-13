import { Item, Link, List, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <Link href="/">PREVENTS DENTAL DISEASE</Link>
        </Item>
        <Item>
          <Link href="/">DELICIOUS</Link>
        </Item>
        <Item>
          <Link href="/">VEGAN</Link>
        </Item>
        <Item>
          <Link href="/">FUN</Link>
        </Item>
        <Item>
          <Link href="/">GLUTEN-FREE</Link>
        </Item>
        <Item>
          <Link href="/">HIGHLY DIGESTIBLE</Link>
        </Item>
      </List>
    </Nav>
  );
};

export default Navigation;
