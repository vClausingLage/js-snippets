// Abstract Product A
interface Chair {
    sitOn(): void;
}

// Concrete Product A1
class VictorianChair implements Chair {
    sitOn() {
        console.log('Sitting on a Victorian chair');
    }
}

// Concrete Product A2
class ModernChair implements Chair {
    sitOn() {
        console.log('Sitting on a Modern chair');
    }
}

// Abstract Product B
interface Sofa {
    lieOn(): void;
}

// Concrete Product B1
class VictorianSofa implements Sofa {
    lieOn() {
        console.log('Lying on a Victorian sofa');
    }
}

// Concrete Product B2
class ModernSofa implements Sofa {
    lieOn() {
        console.log('Lying on a Modern sofa');
    }
}

// Abstract Factory
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
}

// Concrete Factory 1
class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }
    createSofa(): Sofa {
        return new VictorianSofa();
    }
}

// Concrete Factory 2
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
}

// Client code
function clientCode(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    chair.sitOn();
    sofa.lieOn();
}

// Usage
clientCode(new VictorianFurnitureFactory()); // Sitting on a Victorian chair, Lying on a Victorian sofa
clientCode(new ModernFurnitureFactory()); // Sitting on a Modern chair, Lying on a Modern sofa
