import { useState } from "react";
import {
  Header,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { World } from "tabler-icons-react";
import { CONTENT_MARGIN, HEADER_HEIGHT, useStyles } from "./navbarHeaderStyle";
import { Outlet } from "react-router-dom";

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function NavbarHeader({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Header height={HEADER_HEIGHT} className={classes.root}>
        <Box mx={CONTENT_MARGIN} className={classes.header}>
          <Flex align="center">
            <World />
            <Text
              ml="sm"
              color="#0F182E"
              sx={{ fontFamily: "Rokkitt", fontWeight: "bold", fontSize: 24 }}
            >
              Daffa F.
            </Text>
          </Flex>

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Box>
      </Header>
      <Box mb={HEADER_HEIGHT} />

      <Outlet />
    </>
  );
}
