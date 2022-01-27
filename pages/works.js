import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbdysc from '../public/images/works/dyscalculia.png'
import thumbInp from '../public/images/works/logoInp.png'
import eteThumb from '../public/images/works/ete.png'
import thumbDemineur from '../public/images/works/Demineur.png'
import thumbCrowd from '../public/images/works/crowd.jpeg'
{/*import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'*/}

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>

          <WorkGridItem id="Démineur" title="Démineur" thumbnail={thumbDemineur}>
            University project on a C# minesweeper code
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="NewEDT"
            title="NewEDT"
            thumbnail={thumbInp}
          >
          Site that includes information from the Bordeaux INP ADE timetable, while facilitating access and
          by improving the layout - In progress.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ete"
            title="ETE"
            thumbnail={eteThumb}
          >
            Creation of the front-end and one of the games in Javascript for a project aiming to create serious games in order to improve
            participants&apos self-esteem.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ilesauxfractions" thumbnail={thumbdysc} title="Ile Aux Fractions">
            Game on Unity aimed at helping students with dyscalculia learn fractions.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="crowd2D" thumbnail={thumbCrowd} title="Crowd 2D">
            Crowd movement simulator in Python, in 2D with a map creator.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          {/*<WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>*/}
        </Section>
        <Section delay={0.3}>
          {/*<WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>*/}
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          {/*<WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>*/}
        </Section>
        <Section delay={0.5}>
          {/*<WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>*/}
        </Section>
        <Section delay={0.6}>
          {/*<WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>*/}
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
