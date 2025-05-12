import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  VStack,
  Select,
  Link,
  Heading,
} from "@chakra-ui/react";

const linksData = [
  {
    url: "https://auburn-fluid-demo-es.squarespace.com/",
    image: "/assets/images_sites/auburn-fluid-demo-es_squarespace_com.png",
    title: "Sitios Web para Restaurantes",
    description: "Página web profesional adaptable a móviles, menú digital, pedidos por WhatsApp y más.",
    type: "restaurante"

  },
  {
    url: "https://www.bentoteca.com/home-italiano",
    image: "/assets/images_sites/www_bentoteca_com.png",
    title: "Sitios Web para Restaurantes",
    description: "Página web profesional adaptable a móviles, menú digital, pedidos por WhatsApp y más.",
    type: "restaurante"
  },
  {
    url: "https://es.squarespace.com/plantillas/myhra-fluid-demo-es",
    image: "/assets/images_sites/es_squarespace_com.png",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más.",
    type: "hotel"
  },
  {
    url: "https://www.ultimacollection.com/our-collection/ultima-crans-montana",
    image: "/assets/images_sites/www_ultimacollection_com.png",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más.",
    type: "hotel"
  },
  {
    url: "https://www.littlepalmisland.com/",
    image: "/assets/images_sites/www_littlepalmisland_com.png",
    title: "Sitios Web para Hoteles y Hostales",
    description: "Página web profesional, galería de habitaciones, módulo de reservaciones y más.",
    type: "hotel"
  },
  {
    url: "https://dental-clinic-landing-page.webflow.io/",
    image: "/assets/images_sites/dental-clinic-landing-page_webflow_io.png",
    title: "Sitios Web para Clínicas y Consultorios",
    description: "Presentación profesional, citas por WhatsApp, servicios médicos y más.",
    type: "clinica"
  }
];




export default function App() {

  const [data, setData] = React.useState(linksData);


  return (
    <Box bg="black" minH="100vh" py={10} px={{ base: 2, md: 4 }} mt={'0rem'} fontFamily={'monospace'}>
      <Heading textAlign="center" color="white" mb={10} fontSize="2xl" bg='#1b1a1a' paddingY='2rem'>
        Web Solutions GT - Showcase
      </Heading>

      <Box mb={4} textAlign="center" float={'left'} paddingLeft={'2rem'} >
        <Text color="white" fontSize="lg" mb={2}>
          Filtrar por tipo de sitio:
        </Text>
        <Select
          color={'white'}
          background={'black'}
          className="select"
          onChange={(e) => {
            const selectedType = e.target.value;
            if (selectedType === "all") {
              setData(linksData);
            } else {
              setData(linksData.filter(link => link.type === selectedType));
            }
          }}
        >
          <option value="all">Todos</option>
          <option value="restaurante">Restaurantes</option>
          <option value="hotel">Hoteles y Hostales</option>
          <option value="clinica">Clínicas y Consultorios</option>
        </Select>
      </Box>

      <Grid templateColumns='repeat(3, 1fr)' columnGap={4} rowGap={22} w='full' overflowX={'none'} overflowY={'none'} mt={'6rem'}>
        {data.map((link, index) => (
          <Link
            key={index}
            textDecor={'none'}
            href={link.url}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <VStack
              spacing={2}
              bg="#4d50565c"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
              cursor="pointer"
            >
              <Image
                src={link.image}
                alt={link.title}
                objectFit="cover"
                _hover={{ transform: "scale(1.05)", filter: "brightness(0.8) blur(2px)" }}
                width="350px"
                height="280px"
              />
              <Box px={4} py={2} w="full">
                <Text fontSize="sm" color="white" fontWeight="semibold" textDecoration={'none'} _hover={{ textDecor: 'none' }}>
                  {link.title}
                </Text>
              </Box>
            </VStack>
          </Link>
        ))}
      </Grid>
      <Box mt={12} textAlign="center" bg='#0e1117' height={'100%'} p='2rem'>
        <Text color="white" fontSize="sm">
          © 2023 Web Solutions GT. Todos los derechos reservados.
        </Text>
        <Text color="white" fontSize="sm">
          <Link href="https://www.websolutiongt.com/" isExternal>
            www.websolutiongt.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
