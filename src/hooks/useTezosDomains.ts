import { useEffect, useState } from "react";
import { TezosWrapper } from "../Tezos";
import { ConseilTezosDomainsClient } from "@tezos-domains/conseil-client";
import { NODES } from "../config";

export type NetworkType = "florencenet" | "edonet";

const useTezosDomains = (tezos: TezosWrapper, network: NetworkType) => {
    const [client, setClient] = useState<ConseilTezosDomainsClient | undefined>(
        undefined
    );

    useEffect(() => {
        if (network !== "edonet") return;

        setClient(
            new ConseilTezosDomainsClient({
                conseil: { server: NODES.edonet },
                network: "edonet",
                caching: { enabled: true },
            })
        );
    }, [tezos, network]);

    return [client];
};

export default useTezosDomains;
