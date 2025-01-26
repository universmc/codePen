import type { CredentialsParams, RepoDesignation } from "../types/public";
export declare function deleteRepo(params: {
    repo: RepoDesignation;
    hubUrl?: string;
    /**
     * Custom fetch function to use instead of the default one, for example to use a proxy or edit headers.
     */
    fetch?: typeof fetch;
} & CredentialsParams): Promise<void>;
//# sourceMappingURL=delete-repo.d.ts.map