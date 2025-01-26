import type { CredentialsParams } from "../types/public";
import type { CommitOutput, CommitParams } from "./commit";
export declare function deleteFile(params: {
    repo: CommitParams["repo"];
    path: string;
    commitTitle?: CommitParams["title"];
    commitDescription?: CommitParams["description"];
    hubUrl?: CommitParams["hubUrl"];
    fetch?: CommitParams["fetch"];
    branch?: CommitParams["branch"];
    isPullRequest?: CommitParams["isPullRequest"];
    parentCommit?: CommitParams["parentCommit"];
} & CredentialsParams): Promise<CommitOutput>;
//# sourceMappingURL=delete-file.d.ts.map