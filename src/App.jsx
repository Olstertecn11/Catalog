import React from "react";
import { Box, SimpleGrid, Text, Link, VStack, Heading, AspectRatio } from "@chakra-ui/react";

const linksData = [
  {
    url: "https://auburn-fluid-demo-es.squarespace.com/",
    title: "Sitios Web para Restaurantes",
    description: "Página web profesional adaptable a móviles, menú digital, pedidos por WhatsApp y más."
  },
  {
    url: "https://www.bentoteca.com/home-italiano",
    title: "Sitios Web para Restaurantes",
    description: "Página web profesional adaptable a móviles, menú digital, pedidos por WhatsApp y más."
  },
  {
    url: "https://es.squarespace.com/plantillas/myhra-fluid-demo-es",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más."
  },
  {
    url: "https://www.ultimacollection.com/our-collection/ultima-crans-montana",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más."
  },
  {
    url: "https://www.littlepalmisland.com/",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más."
  },
  {
    url: "https://dental-clinic-landing-page.webflow.io/",
    title: "Sitios Web para Clínicas y Consultorios",
    description: "Presentación profesional, citas por WhatsApp, servicios médicos y más."
  }
];

function App() {
  return (
    <Box p={4} maxW="container.lg" mx="auto">
      <Heading mb={4} textAlign="center">Ofertas Especiales - Web Solutions GT</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {linksData.map((link, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" transition="all 0.3s" _hover={{ boxShadow: "lg" }}>
            <VStack align="start" spacing={3}>
              <AspectRatio ratio={16 / 9} w="full">
                <iframe src={link.url} title={link.title} loading="lazy" style={{ border: "none" }} allowFullScreen></iframe>
              </AspectRatio>
              <Text fontWeight="bold">{link.title}</Text>
              <Text fontSize="sm" color="gray.600">{link.description}</Text>
              <Link href={link.url} isExternal color="teal.500" fontWeight="bold">Visitar sitio</Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default App;

