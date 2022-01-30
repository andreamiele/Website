import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Meta from '../../components/work'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a junior developer based in France :)!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrea Miele
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Photograph )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am an ingeneer student in cognitive and computer science based in Bordeaux with a
          passion for building digital services/stuff. I have a knack in finding
          way to solve real-life problems with code. When not online, I love
          making photography and judo.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
              My portfolio
            </Button>
          </NextLink>
        </Box>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Belfort, France.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Baccalauréat S - Bio : 17.89/20
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor&apos;s Program in the Lycée aux Lazaristes - Lyon.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Engineer student in ENSC - Bordeaux.
        </BioSection>
      </Section>
      <Box align="center" my={4}>
        <NextLink href="/files/cv.pdf" download >
          <Button rightIcon={<ChevronRightIcon />} colorScheme="red" target="_blank">
            CV
          </Button>
        </NextLink>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My hobbies !
        </Heading>
        <Paragraph>
          <Meta>C#</Meta>
          <Meta>Python</Meta>
          <Meta>HTML/CSS</Meta>
          <Meta>PHP</Meta>
          <Meta>SQL</Meta>
          <Meta>(learning) JS</Meta>
          <Meta>OCAML</Meta>
          <Meta>Bootstrap</Meta>

        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My hobbies !
        </Heading>
        <Paragraph>
          Photography, Art, Computer Science, Sport (judo, running,...), Music{' '}
          {/*<Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}


        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me, on the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/andreamiele" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @andreamiele
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/aerdnasan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @aerdnasan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/andrea-miele-9b2188210/" target="_blank">
              <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Andrea MIELE
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
