import { ServerResponse } from "http";
import { serviceA } from "../services/serviceA";
import { serviceB } from "../services/serviceB";


function addStr(str: string, index: number, stringToAdd: string){
  return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

export default async function controllerB(res: ServerResponse, curr: string): Promise<ServerResponse> {
	const coinB = await serviceB(curr)
	const coinA = await serviceA(curr)

	if (!coinB.ok || !coinA.ok) {
		res.writeHead(422, { "Content-Type": "application/json" })
		res.end(JSON.stringify({
			errorCode: 422,
			message: {
				serviceA: coinA.error,
				serviceB: coinB.error
			}
		}))
		return res
	}

	const coinAValue = coinA.data.cotacao
	const coinBValue = parseFloat(addStr(coinB.data.cotacao.valor, 1, ".")) // transforming in float, i think it's need to compare in rigth way

	console.log(coinAValue, coinBValue)

	if (coinAValue >= coinBValue) {
		res.writeHead(200, { "Content-Type": "application/json" })
		res.end(JSON.stringify({
			...coinA.data
		}))
		return res
	}

	res.writeHead(200, { "Content-Type": "application/json" })
	res.end(JSON.stringify({
		...coinB.data.cotacao
	}))

	return res
}