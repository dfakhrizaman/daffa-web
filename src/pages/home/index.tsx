import { createStyles, Image, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { daffaHeadStroke, daffaHeadStrokeDoodle } from "../../assets/index";

const titleStyle = createStyles((theme) => ({
  title: { fontFamily: "Outfit" },
}));

const HomePage = () => {
  const { classes } = titleStyle();
  const { hovered: isImageHovered, ref: imageHoveredRef } = useHover();

  return (
    <>
      <Title order={1} className={classes.title} color="#284582">
        DAFFA FAKHRIZAMAN
      </Title>
      <Text>🖥 Web Development</Text>
      <Text>📱 Mobile App Development</Text>
      <Text>🎛 Internet of Things</Text>
      <Image
        ref={imageHoveredRef}
        src={isImageHovered ? daffaHeadStrokeDoodle : daffaHeadStroke}
        height={200}
        width={200}
        fit="contain"
        alt="Daffa"
      />
      <Title order={2} className={classes.title}>
        Skills
      </Title>
      <Title order={2} className={classes.title}>
        Experiences
      </Title>
      <Title order={2} className={classes.title}>
        Projects
      </Title>
      <Title order={2} className={classes.title}>
        About Me
      </Title>
      <Title order={2} className={classes.title}>
        Contact
      </Title>
    </>
  );
};

export default HomePage;
