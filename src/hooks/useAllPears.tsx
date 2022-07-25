import axios from "axios";
import { useCallback, useState } from "react";
import { Pear } from "../types/api/Pear";

export const useAllPears = () => {
	const [loading, setLoading] = useState(false);
	const [pears, setPears] = useState<Array<Pear>>([]);
	const getPears = useCallback(() => {
		setLoading(true);
		axios
			.get<Array<Pear>>("./pear.json")
			.then((res) => setPears(res.data))
			.catch(function (error) {
				console.log('取得失敗', error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return {getPears, loading, pears};
}
