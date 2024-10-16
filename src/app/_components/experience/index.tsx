import { Card, CardContent } from "@/components/ui/card";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious } from "@/components/ui/carousel";


const Experience = () =>{
    return(
    
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div>
                    <Card>
                        <CardContent>
                            <span></span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                <div>
                    <Card>
                        <CardContent>
                            <span></span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                <div>
                    <Card>
                        <CardContent>
                            <span></span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>

    )
}
export default Experience;