import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbFiocruz from '../public/images/works/thumbFiocruz.png';

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="fiocruz" title="Fiocuz" thumbnail={thumbFiocruz}>
                        A project made for the foundation of Fiocruz, for cell phones, in order to monitor the poorest
                        population and their examinations at health centers
                    </WorkGridItem>
                </Section>

                
            </SimpleGrid>
        </Container>
    )
}

export default Works;