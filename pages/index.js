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
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'

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
                    It&apos;s all right?! I&apos;m Jonas Timbaúba 🤠🖖🏽
                    <br />
                    I do Computer Science at Unifor - Universidade de Fortaleza, I&apos;m passionate about backend,
                    but I also program for frontend, I like series and I&apos;m always playing or playing an instrument
                    <NextLink href="/works/inkdrop">
                        <Link> Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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
                    <BioYear>1999</BioYear>
                    Born in Fortaleza - Ceará, Brasil.
                </BioSection>

                <BioSection>
                    <BioYear>2017</BioYear>
                    Complete high school
                </BioSection>

                <BioSection>
                    <BioYear>2018 - 2021</BioYear>
                    Undergraduate in Computer Science
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Passion ❤️
                </Heading>

                <Paragraph>
                    Music, play instruments, watch series and play games.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>

                <List>
                    <ListItem>
                        <Link href="https://github.com/JonasTB" target="_blank" ></Link>
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoGithub} />}
                        >
                            @JonasTB
                        </Button>
                    </ListItem>

                    <ListItem>
                        <Link href="https://www.instagram.com/timbaubafj/" target="_blank" ></Link>
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoInstagram} />}
                        >
                            @timbaubafj
                        </Button>
                    </ListItem>

                    <ListItem>
                        <Link href="https://twitter.com/timbaubafj" target="_blank" ></Link>
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoTwitter} />}
                        >
                            @timbaubafj
                        </Button>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Page;