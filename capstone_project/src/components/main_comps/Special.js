import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Special = ({ title, description, imageSrc }) => {

  return (
    <VStack 
      align="left"
      backgroundColor="white"
      borderRadius="50px"
      alignItems="left"
      width="30vw"
      height="400px"
      overflow="hidden"
      margin="10px"
    >
      <Image  src={imageSrc} objectFit="cover" alt={title} height="250px" />

      <VStack  align="left" alignItems="left" borderColor="white" >

        <Heading color="black" size="sm" margin={"0 10px 0 10px"}>{title}</Heading>
        <Text fontSize="16px" color="dimgray" fontStyle="italic" margin={"10px"} >{description}</Text>

      </VStack>

    </VStack>
  )
};

export default Special;