
import { EraData } from './types';

export const ERAS: EraData[] = [
  {
    id: 'intro',
    title: 'CHEMISE',
    subtitle: 'L\'ÉTOFFE DU POUVOIR',
    content: "La chemise est aujourd’hui un vêtement banal, porté par tous. Pourtant, son histoire révèle un rôle bien plus profond : un marqueur de pouvoir, un outil de distinction sociale et parfois même un symbole de domination ou de contestation.",
    color: '#0a0a0a',
    textColor: '#ffffff',
    fontFamily: 'Bebas Neue',
    accentColor: '#ff3e3e',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop',
    details: [
      {
        title: "L'Origine du Nom",
        text: "Du bas-latin 'camisia', le mot désignait une tunique de nuit. Elle était le vêtement le plus proche du corps, celui qui touchait l'âme.",
        style: 'big'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1598454061631-40b39715c6c7?q=80&w=200", top: "15%", left: "10%", rotation: -15 },
      { image: "https://images.unsplash.com/photo-1591047139829-d91aec16adcd?q=80&w=200", top: "70%", left: "80%", rotation: 10 },
      { image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=200", top: "20%", left: "85%", rotation: 5 }
    ]
  },
  {
    id: 'antiquity',
    title: 'ANTIQUITÉ',
    subtitle: 'LE POUVOIR SACRÉ',
    content: "Dans l'Antiquité, le pouvoir est étroitement lié à la religion. Les prêtres et dignitaires portent des tissus en lin fin, symbole de pureté et de proximité avec le sacré. La chemise n'est pas un objet de mode, mais une interface entre le corps et l'ordre divin.",
    color: '#fdf5e6',
    textColor: '#2c1810',
    fontFamily: 'Cormorant Garamond',
    accentColor: '#d4af37',
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bbd6?q=80&w=800&auto=format&fit=crop',
    rotation: -2,
    details: [
      {
        title: "Le Lin d'Égypte",
        text: "En Égypte, le lin était 'la lumière de la lune tissée'. Les pharaons portaient des tuniques si fines qu'elles marquaient une supériorité sociale évidente.",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
        style: 'overlap'
      },
      {
        title: "Supériorité Sociale",
        text: "La blancheur du vêtement et la finesse des plis marquent une distance céleste face aux tuniques grossières du peuple.",
        style: 'vertical'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1599116723121-6a03037c355b?q=80&w=200", top: "5%", left: "75%", rotation: 5 },
      { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=200", top: "60%", left: "5%", rotation: -8 },
      { image: "https://images.unsplash.com/photo-1542318238-439499e41ccb?q=80&w=200", top: "80%", left: "20%", rotation: 12 }
    ]
  },
  {
    id: 'middleages',
    title: 'MOYEN ÂGE',
    subtitle: 'POUVOIR FÉODAL & RELIGIEUX',
    content: "La chemise devient un sous-vêtement central. Elle symbolise la discipline morale et le contrôle du corps, valeurs piliers de la société médiévale. Le pouvoir s'exerce jusque dans l'intimité du vêtement, renforçant l'idée que l'ordre social est immuable.",
    color: '#1a1a1a',
    textColor: '#e0e0e0',
    fontFamily: 'UnifrakturMaguntia',
    accentColor: '#8b0000',
    image: 'https://images.unsplash.com/photo-1519340241574-211915c6997a?q=80&w=800&auto=format&fit=crop',
    rotation: 1,
    details: [
      {
        title: "La Chainse",
        text: "Longue et étroite, elle est l'ancêtre de la chemise. Elle protégeait les habits de luxe de la sueur du corps.",
        style: 'standard'
      },
      {
        title: "Blancheur Spirituelle",
        text: "L'Église impose la chemise blanche comme symbole de chasteté, cachée sous l'armure.",
        image: "https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?q=80&w=500",
        style: 'overlap'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?q=80&w=200", top: "10%", left: "5%", rotation: -12 },
      { image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=200", top: "80%", left: "70%", rotation: 15 },
      { image: "https://images.unsplash.com/photo-1506501139174-099022df5263?q=80&w=200", top: "40%", left: "90%", rotation: -5 }
    ]
  },
  {
    id: 'renaissance',
    title: 'RENAISSANCE',
    subtitle: 'POUVOIR MIS EN SCÈNE',
    content: "Tournant majeur : la chemise sort partiellement de l'ombre. Les manches bouffantes et les broderies expriment la richesse, le savoir et l'autorité. Les dirigeants utilisent le vêtement pour affirmer leur position dans la théâtralisation du pouvoir.",
    color: '#4a3728',
    textColor: '#f1e5ac',
    fontFamily: 'Playfair Display',
    accentColor: '#c5a059',
    image: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800&auto=format&fit=crop',
    rotation: 3,
    details: [
      {
        title: "Le Crevé",
        text: "On taillade les manches pour laisser jaillir le bouillonnement du lin. Plus le tissu sort, plus le seigneur est puissant.",
        style: 'big'
      },
      {
        title: "La Fraise",
        text: "Ce col démesuré forçait une posture de supériorité, empêchant de baisser la tête.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500",
        style: 'overlap'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200", top: "15%", left: "80%", rotation: 20 },
      { image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=200", top: "75%", left: "10%", rotation: -5 },
      { image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=200", top: "5%", left: "40%", rotation: 8 }
    ]
  },
  {
    id: 'xviii',
    title: 'XVIIIe SIÈCLE',
    subtitle: 'POUVOIR ARISTOCRATIQUE',
    content: "La blancheur impeccable devient un symbole de privilège absolu. Elle implique du temps, de l'argent et du personnel pour l'entretien. Le pouvoir se manifeste par la maîtrise de l'apparence et du corps, visible sous les vêtements luxueux.",
    color: '#ffffff',
    textColor: '#1a1a1a',
    fontFamily: 'Playfair Display',
    accentColor: '#add8e6',
    image: 'https://images.unsplash.com/photo-1445205170230-053b830c6039?q=80&w=800&auto=format&fit=crop',
    rotation: -1,
    details: [
      {
        title: "Le Jabot",
        text: "Cascade de dentelles, signature de l'homme de cour. Il adoucit les traits mais affirme le rang.",
        style: 'standard'
      },
      {
        title: "L'Entretien",
        text: "Changer de chemise plusieurs fois par jour prouvait l'absence d'effort physique. Le vêtement est le déni du labeur.",
        image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=500",
        style: 'overlap'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=200", top: "10%", left: "60%", rotation: 10 },
      { image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=200", top: "85%", left: "5%", rotation: -10 },
      { image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=200", top: "40%", left: "80%", rotation: 25 }
    ]
  },
  {
    id: 'xix',
    title: 'XIXe SIÈCLE',
    subtitle: 'POUVOIR BOURGEOIS',
    content: "Avec la révolution industrielle, le pouvoir ne repose plus sur la naissance mais sur la réussite économique. La chemise se rigidifie, adopte des cols durs et des coupes strictes, symbolisant la discipline et le sérieux d'un pouvoir fondé sur la productivité.",
    color: '#2b2b2b',
    textColor: '#ffffff',
    fontFamily: 'Space Grotesk',
    accentColor: '#555555',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop',
    details: [
      {
        title: "Le Col Amovible",
        text: "Inventé en 1827 par Hannah Montague. Il permettait d'avoir l'air propre sans laver la chemise entière.",
        style: 'big'
      },
      {
        title: "L'Empesage",
        text: "L'amidon rend le plastron dur comme une armure. Le bourgeois ne plie pas, il dirige avec ordre.",
        image: "https://images.unsplash.com/photo-1594932224828-b4b057b99c15?q=80&w=500",
        style: 'overlap'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1594932224828-b4b057b99c15?q=80&w=200", top: "20%", left: "5%", rotation: -15 },
      { image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200", top: "70%", left: "75%", rotation: 12 },
      { image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200", top: "10%", left: "40%", rotation: 3 }
    ]
  },
  {
    id: 'xx',
    title: 'XXe SIÈCLE',
    subtitle: 'POUVOIR MODERNE',
    content: "La chemise devient un outil politique total. Des chemises brunes aux 'cols blancs' des bureaux, elle symbolise l'autorité, la révolte ou l'émancipation. Elle accompagne l'entrée des femmes dans le travail et devient un symbole d'égalité progressive.",
    color: '#e63946',
    textColor: '#f1faee',
    fontFamily: 'Bebas Neue',
    accentColor: '#a8dadc',
    image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=800&auto=format&fit=crop',
    rotation: 5,
    details: [
      {
        title: "White Collar",
        text: "Désigne la classe bureaucratique, celle qui ne salit pas ses mains, opposée au 'Blue Collar' ouvrier.",
        style: 'vertical'
      },
      {
        title: "Émancipation",
        text: "Le T-shirt, né comme sous-vêtement, commence à détrôner la chemise comme symbole de liberté.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500",
        style: 'overlap'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=200", top: "10%", left: "80%", rotation: -8 },
      { image: "https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=200", top: "80%", left: "10%", rotation: 15 },
      { image: "https://images.unsplash.com/photo-1539109132314-347596d6b508?q=80&w=200", top: "50%", left: "5%", rotation: -20 }
    ]
  },
  {
    id: 'xxi',
    title: 'XXIe SIÈCLE',
    subtitle: 'POUVOIR IDENTITAIRE',
    content: "Aujourd'hui, le pouvoir s'exerce par le choix et l'affirmation de soi. La chemise s'adapte à toutes les identités : oversize, non-genrée, déstructurée. Elle n'impose plus une hiérarchie, mais permet à chacun de se positionner librement dans la société.",
    color: '#00f2ff',
    textColor: '#000',
    fontFamily: 'Space Grotesk',
    accentColor: '#ff00c1',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop',
    details: [
      {
        title: "Fluidité",
        text: "Le boutonnage hérité de l'époque où les valets habillaient les maîtres disparaît pour la fluidité.",
        style: 'standard'
      }
    ],
    scraps: [
      { image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=200", top: "15%", left: "5%", rotation: -10 },
      { image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=200", top: "70%", left: "85%", rotation: 5 },
      { image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=200", top: "5%", left: "80%", rotation: -15 }
    ]
  }
];
