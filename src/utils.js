const { parseNbtString } = await import('snbt-js');

export function parseNbt(text) {
    let newT = ""
    text.replaceAll("\t", "").split("\n").forEach(line => {
        newT += line;
        newT += (line.endsWith("{") || line.endsWith("[")) ? "" : ",";
    })
    newT = newT.replaceAll(",,", "");
    return parseNbtString(newT)
}

export const text = `{
\tid: "3CE7A31729C0A0C5"
\tgroup: "2AD38F52E4CDF46B"
\torder_index: 1
\tfilename: "ethe_nether"
\ttitle: "&4The Nether"
\ticon: "minecraft:netherrack"
\tdefault_quest_shape: ""
\tdefault_hide_dependency_lines: false
\tquests: [
\t\t{
\t\t\ttitle: "&4Nether"
\t\t\ticon: "minecraft:netherrack"
\t\t\tx: 0.0d
\t\t\ty: 0.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["63DE65B89A7728BB"]
\t\t\tsize: 2.5d
\t\t\tid: "45336F2D5B60F074"
\t\t\ttasks: [{
\t\t\t\tid: "1E22F086AC7FBC71"
\t\t\t\ttype: "dimension"
\t\t\t\tdimension: "minecraft:the_nether"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ A Terrible Fortress ]"
\t\t\tx: 3.0d
\t\t\ty: 0.0d
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tsize: 1.25d
\t\t\tid: "5A2A25F0C85D1488"
\t\t\ttasks: [{
\t\t\t\tid: "0A5EA8AC68D8E6DD"
\t\t\t\ttype: "structure"
\t\t\t\ticon: "minecraft:nether_bricks"
\t\t\t\tstructure: "minecraft:fortress"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Into Fire ]"
\t\t\tx: 5.0d
\t\t\ty: -1.0d
\t\t\tdependencies: ["5A2A25F0C85D1488"]
\t\t\tid: "3206EEF68B99CE21"
\t\t\ttasks: [{
\t\t\t\tid: "6DC8EE7BEFE9F08C"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:blaze_rod"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Spooky Scary Skeleton ]"
\t\t\tx: 5.0d
\t\t\ty: 1.0d
\t\t\tdependencies: ["5A2A25F0C85D1488"]
\t\t\tid: "3CA3049E44333845"
\t\t\ttasks: [{
\t\t\t\tid: "7CE1B286CBB29F3C"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:wither_skeleton_skull"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Withering Heights ]"
\t\t\tx: 7.0d
\t\t\ty: 1.0d
\t\t\tdependencies: ["3CA3049E44333845"]
\t\t\tid: "41772A79E200D554"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "1B2016EF5D18F3F8"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:wither_skeleton_skull"
\t\t\t\t\tcount: 3L
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "2D0CA42F564F01CA"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:soul_sand"
\t\t\t\t\tcount: 4L
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ticon: "minecraft:nether_star"
\t\t\tx: 9.0d
\t\t\ty: 1.0d
\t\t\tdependencies: ["41772A79E200D554"]
\t\t\tsize: 1.25d
\t\t\tid: "17D6AA82A8DDC4A0"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "499B20455F0DE5FB"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:nether_star"
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "529C404A37497F0E"
\t\t\t\t\ttype: "kill"
\t\t\t\t\tentity: "minecraft:wither"
\t\t\t\t\tvalue: 1L
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Bring Home the Beacon ]"
\t\t\ticon: "minecraft:beacon"
\t\t\tx: 11.0d
\t\t\ty: 1.0d
\t\t\tdependencies: ["17D6AA82A8DDC4A0"]
\t\t\tid: "68E2E8C7D106A21B"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "58BC0781188060E1"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:beacon"
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "08DF529B3BD61342"
\t\t\t\t\ttype: "item"
\t\t\t\t\ttitle: "Any #forge:storage_blocks"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "itemfilters:tag"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tvalue: "forge:storage_blocks"
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t\tcount: 9L
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&b[ Beaconator ]"
\t\t\ticon: "minecraft:beacon"
\t\t\tx: 13.0d
\t\t\ty: 1.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["68E2E8C7D106A21B"]
\t\t\tsize: 1.5d
\t\t\tid: "35491F077DF567CA"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "689BABAA42260503"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:beacon"
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "0A22E84643F840AF"
\t\t\t\t\ttype: "item"
\t\t\t\t\ttitle: "Any #forge:storage_blocks"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "itemfilters:tag"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tvalue: "forge:storage_blocks"
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t\tcount: 164L
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Local Brewery ]"
\t\t\tx: 7.0d
\t\t\ty: -1.0d
\t\t\tdependencies: ["3206EEF68B99CE21"]
\t\t\tid: "24889C59119C0B40"
\t\t\ttasks: [{
\t\t\t\tid: "15831FF339F6DF81"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:brewing_stand"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&d[ How Did We Get Here? ]"
\t\t\tx: 13.0d
\t\t\ty: -1.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["2CCE597C15A6D1FF"]
\t\t\tsize: 1.5d
\t\t\tid: "239E46B442B3B386"
\t\t\ttasks: [{
\t\t\t\tid: "3FDE063880C5AEC0"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/all_effects"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&d[ A Furious Cocktail ]"
\t\t\tx: 10.0d
\t\t\ty: -1.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["24889C59119C0B40"]
\t\t\tsize: 1.25d
\t\t\tid: "2CCE597C15A6D1FF"
\t\t\ttasks: [{
\t\t\t\tid: "35D01F6EF4C2385D"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/all_potions"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Those Were the Days ]"
\t\t\tx: -3.0d
\t\t\ty: 0.0d
\t\t\tmin_required_dependencies: 1
\t\t\tdependencies: [
\t\t\t\t"45336F2D5B60F074"
\t\t\t\t"5CA6C2A933140955"
\t\t\t]
\t\t\tsize: 1.25d
\t\t\tid: "056423AA83CDAE0B"
\t\t\ttasks: [{
\t\t\t\tid: "4EAD69EBB34E0666"
\t\t\t\ttype: "structure"
\t\t\t\ticon: "minecraft:polished_blackstone_bricks"
\t\t\t\tstructure: "minecraft:bastion_remnant"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ War Pigs ]"
\t\t\tx: -5.0d
\t\t\ty: -1.0d
\t\t\tdependencies: ["056423AA83CDAE0B"]
\t\t\tid: "33D77988FFF481C5"
\t\t\ttasks: [{
\t\t\t\tid: "6CCF2FF578156C17"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/loot_bastion"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Oh Shiny ]"
\t\t\tx: -5.0d
\t\t\ty: 1.0d
\t\t\tdependencies: ["056423AA83CDAE0B"]
\t\t\tid: "5353FDD4C8CA1ADF"
\t\t\ttasks: [{
\t\t\t\tid: "2F2C501E624B81CF"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/distract_piglin"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\tx: -1.7073979591836732d
\t\t\ty: -0.8214285714285765d
\t\t\tdependencies: [
\t\t\t\t"2DD788C01061D317"
\t\t\t\t"45336F2D5B60F074"
\t\t\t]
\t\t\tsize: 0.75d
\t\t\toptional: true
\t\t\tid: "5CA6C2A933140955"
\t\t\ttasks: [{
\t\t\t\tid: "3BC7B8610E5A7D91"
\t\t\t\ttype: "item"
\t\t\t\ttitle: "Golden Amror"
\t\t\t\titem: {
\t\t\t\t\tid: "itemfilters:or"
\t\t\t\t\tCount: 1b
\t\t\t\t\ttag: {
\t\t\t\t\t\titems: [
\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\tid: "minecraft:golden_helmet"
\t\t\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\tid: "minecraft:golden_chestplate"
\t\t\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\tid: "minecraft:golden_leggings"
\t\t\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\tid: "minecraft:golden_boots"
\t\t\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t}
\t\t\t\t\t\t]
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Hidden in the Depths ]"
\t\t\tx: 0.0d
\t\t\ty: 3.0d
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tsize: 1.25d
\t\t\tid: "2753A47853D99602"
\t\t\ttasks: [{
\t\t\t\tid: "368F85875AABAD1F"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:ancient_debris"
\t\t\t}]
\t\t}
\t\t{
\t\t\tx: 0.0d
\t\t\ty: 5.0d
\t\t\tdependencies: ["2753A47853D99602"]
\t\t\tsize: 1.5d
\t\t\tid: "53DBA5B0B2D45659"
\t\t\ttasks: [{
\t\t\t\tid: "477DAE1C24C0C1A5"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:netherite_ingot"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&d[ Cover Me in Debri ]"
\t\t\tx: 0.0d
\t\t\ty: 8.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: [
\t\t\t\t"53DBA5B0B2D45659"
\t\t\t\t"5039A142ED6F3A4C"
\t\t\t]
\t\t\tsize: 1.5d
\t\t\tid: "6099C27C8CDD53A1"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "6361486D4D3EACFC"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:netherite_helmet"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "393D7A350F0FD693"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:netherite_chestplate"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "13BECA01C682D0D7"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:netherite_leggings"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "42AA7954BEC5CA07"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:netherite_boots"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\tx: 0.0d
\t\t\ty: 6.5d
\t\t\tdependencies: ["53DBA5B0B2D45659"]
\t\t\tid: "5039A142ED6F3A4C"
\t\t\ttasks: [{
\t\t\t\tid: "03FF50A43D992B5C"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:smithing_table"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&d[ Return to Sender ]"
\t\t\tx: -2.0d
\t\t\ty: -3.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["5D0DF077BB686277"]
\t\t\tsize: 1.25d
\t\t\tid: "442A55DE81D4855A"
\t\t\ttasks: [{
\t\t\t\tid: "14BABEFFF90816D6"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/return_to_sender"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\tx: 0.0d
\t\t\ty: -3.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tid: "5D0DF077BB686277"
\t\t\ttasks: [{
\t\t\t\tid: "7E9C8FB17E66441F"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:ghast_tear"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&d[ Uneasy Alliance ]"
\t\t\tx: -5.0d
\t\t\ty: -3.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["442A55DE81D4855A"]
\t\t\tsize: 1.5d
\t\t\tid: "766D29DBB4041431"
\t\t\ttasks: [{
\t\t\t\tid: "4FC299835F75CF95"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/uneasy_alliance"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\tx: 2.0d
\t\t\ty: 5.0d
\t\t\tdependencies: ["53DBA5B0B2D45659"]
\t\t\tid: "4BA08E468A2A819B"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "58C0ED8ADCB8500F"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:lodestone"
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "7356C00ECADBB1AD"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:compass"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tLodestoneDimension: "minecraft:overworld"
\t\t\t\t\t\t\tLodestoneTracked: 1b
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Who is Cutting Onions? ]"
\t\t\tx: -2.5d
\t\t\ty: 2.5d
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tid: "7461EB8F8ED72E9F"
\t\t\ttasks: [{
\t\t\t\tid: "42EA75C6B81CC9F7"
\t\t\t\ttype: "item"
\t\t\t\titem: "minecraft:crying_obsidian"
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ Not Quite \\"Nine\\" Lives ]"
\t\t\tx: -4.0d
\t\t\ty: 4.0d
\t\t\tdependencies: ["7461EB8F8ED72E9F"]
\t\t\tid: "4F9C635D419F6BAF"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "6B24888D1A0E0D71"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:respawn_anchor"
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "788DDB3F335C7C8E"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: "minecraft:glowstone"
\t\t\t\t\tcount: 4L
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&d[ Subspace Bubble ]"
\t\t\tx: 2.5d
\t\t\ty: -2.5d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tsize: 1.25d
\t\t\tid: "29BE6CCAF15A08D7"
\t\t\ttasks: [{
\t\t\t\tid: "367210CD33367E4C"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/fast_travel"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t\t{
\t\t\ttitle: "&e[ This Boat Has Legs ]"
\t\t\tx: 2.5d
\t\t\ty: 2.5d
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tid: "08DC5092F902E563"
\t\t\ttasks: [
\t\t\t\t{
\t\t\t\t\tid: "40FF9EDEA3F8CAB4"
\t\t\t\t\ttype: "advancement"
\t\t\t\t\tadvancement: "minecraft:nether/ride_strider"
\t\t\t\t\tcriterion: ""
\t\t\t\t}
\t\t\t\t{
\t\t\t\t\tid: "31D00F7F2D6D477F"
\t\t\t\t\ttype: "item"
\t\t\t\t\titem: {
\t\t\t\t\t\tid: "minecraft:warped_fungus_on_a_stick"
\t\t\t\t\t\tCount: 1b
\t\t\t\t\t\ttag: {
\t\t\t\t\t\t\tDamage: 0
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t]
\t\t}
\t\t{
\t\t\ttitle: "&d[ Hot Tourist Destinations ]"
\t\t\tx: 4.0d
\t\t\ty: 4.0d
\t\t\tshape: "octagon"
\t\t\tdependencies: ["45336F2D5B60F074"]
\t\t\tsize: 1.5d
\t\t\tid: "6977541FADD3458A"
\t\t\ttasks: [{
\t\t\t\tid: "5F1D401E2394D47C"
\t\t\t\ttype: "advancement"
\t\t\t\tadvancement: "minecraft:nether/explore_nether"
\t\t\t\tcriterion: ""
\t\t\t}]
\t\t}
\t]
}
`

console.log(parseNbt(text));
