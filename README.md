# 09-2-navigation

Faire quatre écrans, Les pages doivent toutes se trouver dans un Drawer Navigation :
- Le premier « Accueil » doit contenir un message de bienvenue (il 
ne sera pas présent dans le Drawer navigation).
Il doit contenir un bouton permettant d’aller sur la page Ada 
Lovelace grâce à la Stack navigation.
- Le second « Ada LOVELACE » doit contenir cette image :

Et ce texte : Ada LOVELACE
- Le troisième « Personnage » doit contenir ce texte : 

Ada Lovelace, de son nom complet Augusta Ada King, comtesse de 
Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte 
le 27 novembre 1852 à Marylebone dans la même ville, est une 
pionnière de la science informatique.
- Le quatrième « Biographie » doit contenir ce texte : 

Ada était la seule fille légitime du poète George Gordon Byron et de 
son épouse Annabella Milbanke, une femme intelligente et cultivée, 
cousine de Caroline Lamb, dont la liaison avec Byron fut à l'origine 
d'un scandale. Le premier prénom d'Ada, Augusta, aurait été choisi en 
hommage à Augusta Leigh, la demi-sœur de Byron, avec qui ce dernier 
aurait eu des relations incestueusesSwade 2. Le prénom Ada aurait été 
choisi par Byron lui-mêmeStein 1, car il était « court, ancien et 
vocalique »Wolfram 1. C'est Augusta qui encouragea Byron à se marier 
pour éviter un scandale, et il épousa Annabella à contrecœur[réf. 
souhaitée], en janvier 1815. Ada naît en décembre de cette même année. 
À la suite de quatre tentatives de viol en état d'ivresse de la part 
de ByronSwade 2, Annabella quitte Byron le 16 janvier 1816, gardant 
Ada avec elle. Le 21 avril, Byron signe l'acte de séparation, puis 
quitte le Royaume-Uni pour toujours. Il ne les revit jamais.
 Annabella adorait les mathématiques. Byron l’appelait même parfois « 
la princesse des parallélogrammesSwade 2 » et fit en sorte que les 
tuteurs d'Ada lui donnent une éducation approfondie en mathématiques 
et en sciences, ce qui était tout à fait inhabituel à l'époque dans 
l'éducation d'une jeune fille de la noblesse. En 1832, Ada rencontre 
Mary Somerville, éminente chercheuse et auteur scientifique du XIXe 
siècle, qui l'encourage et l'aide à progresser en mathématiques. Le 5 
juin 1833, Mary lui présente Charles Babbage, et Ada — alors âgée de 
17 ans — est immédiatement fascinée par ses machines à calcul. Ils 
deviennent très proches, Ada semblant trouver en Babbage le père 
qu'elle n'avait jamais euCollier 1. Parmi ses autres connaissances, on 
compte David Brewster, Charles Wheatstone, Charles Dickens et Michael 
Faraday.
 Elle se marie en 1835 avec William King, 1er comte de Lovelace. Ils 
auront trois enfants : Byron, né le 12 mai 1836, Annabella (Anne 
LA MANU est une marque de NOVEI Formation
NOVEI Formation – Campus Inovia Bâtiment 12 – 1435 boulevard Cambronne – 60400 Noyon
SIRET N° 752 434 605 00024 – Code activité : 8559A – Déclaration d’activité N° 32 60 03047 60
3
Blunt) née le 22 septembre 1837 et Ralph Gordon né le 2 juillet 1839. 
William était dévoué à Ada et encourageait les goûts et les activités 
d'Ada en mathématiques. La famille vécut à Ockham Park, à Okham (en). 
Son titre et son nom complet furent pendant la plus grande partie de 
sa vie La très honorable Augusta Ada, comtesse de Lovelace. Elle est 
plus connue sous le nom de Ada Lovelace ou Lady Lovelace.*
 Lettre de Lovelace à De Morgan, à propos du calcul différentiel.
 La santé fragile d'Ada, mise à l'épreuve par les grossesses, ainsi 
que ses responsabilités de mère et de maîtresse de maison, la tiennent 
écartée de ses activités mathématiques jusqu'en 1839. À cette date, 
elle éprouve le besoin de reprendre l'étude des mathématiques et 
demande à Babbage de lui recommander un tuteur : le célèbre 
mathématicien Auguste De Morgan accepte cette charge. Les études d'Ada 
reprennent, et De Morgan trouve en Ada une élève enthousiaste et 
créativeSwade 3. Ada prend confiance dans ses capacités en 
mathématiques, encouragée par les retours positifs de De MorganWolfram 
2. Le 6 février 1841, Ada écrit à sa mère une lettre où elle parle de 
ses goûts et aspirations : « Je crois que je possède une singulière 
combinaison de qualités, qui semble précisément ajustées pour me 
prédisposer à devenir une exploratrice des réalités cachées de la 
Nature ». Elle mentionne son « énergie inépuisable et insatiable » et 
pense avoir trouvé un sens à sa vieWolfram 3.
En 1841, Ada a de nouveau des problèmes de santé, mais elle 
revient aux mathématiques fin 1842. Elle tourne dès lors entièrement 
son travail vers la machine analytique de Babbage, et propose à ce 
dernier ses services pour en poursuivre le développement et la 
promotion.


--------

Aller sur https://reactnative.dev/docs/navigation#react-navigation et le Tab navigation est visible tout en bas de la page et nous amène sur : https://reactnavigation.org/docs/tab-based-navigation/

installation :

$ npm install @react-navigation/native @react-navigation/native-stack

$ expo install react-native-screens react-native-safe-area-context

$ npm install @react-navigation/bottom-tabs

installer le drawer navigation : https://reactnavigation.org/docs/drawer-navigator/#installation

$ npm install @react-navigation/drawer

$ expo install react-native-gesture-handler react-native-reanimated

Un plantage babel va arriver, il manque le plugin reanimated, l'ajouter dans babel.config.js ( solution ici : https://github.com/software-mansion/react-native-reanimated/issues/1875 )

    module.exports = function(api) {
    	api.cache(true);
    	return {
	    	presets: ['babel-preset-expo'],
	    	plugins: ['react-native-reanimated/plugin']
    	};
    };

Puis lancer l'app avec :

$ expo start -c

installer le stack navigator : https://reactnavigation.org/docs/stack-navigator/

$ npm install @react-navigation/stack

$ expo install react-native-gesture-handler

mettre tout en haut du projet sinon ca crash : import 'react-native-gesture-handler';

les icônes : https://github.com/oblador/react-native-vector-icons

$ npm i react-native-vector-icons

Choisir une icône : https://ionic.io/ionicons
