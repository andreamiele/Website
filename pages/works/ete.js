import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ETE">
    <Container>
      <Title>
        ETE <Badge>2021</Badge>
      </Title>
      <P>
        Creation of the front-end and one of the games in Javascript for a project aiming to create serious games in order to improve
        participants&apos self-esteem.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://arnaudbscp.fr/ete/">
            https://arnaudbscp.fr/ete/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
      </List>

      {/*<WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />*/  }
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
