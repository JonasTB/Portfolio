import NextLink from 'next/link';
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3} mb={6}
                align="center">
                Hello, I&apos;m a full-stack developer from Brazil!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonas Timbaúba
                    </Heading>
                    <p>Developer</p>
                </Box>

                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/jonas.jpeg"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Opa, beleza?! Eu sou Jonas Timbaúba 🤠🖖🏽
                    <br />
                    Faço Ciência da Computação na Unifor - Universidade de Fortaleza, sou apaixonado por back-end, séries e uns jogos ai!
                    <NextLink href="/works/inkdrop">
                        <Link> Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Meu portfólio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                    <BioYear>1999</BioYear>
                    Nascido em Fortaleza - Ceará, Brasil.
                </BioSection>

                <BioSection>
                    <BioYear>2017</BioYear>
                    Ensino médio completo.
                </BioSection>

                <BioSection>
                    <BioYear>2018 - 2021</BioYear>
                    Em graduação no curso de Ciência da Computação.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Passion
                </Heading>

                <Paragraph>
                Música, tocar instrumentos, assistir séries e jogar.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page;